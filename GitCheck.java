import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class GitCheck {

    public static void main(String[] args) throws FileNotFoundException {
        File gitRepositoryDir = new File("E:\\VuePress-WorkSpace\\jinmunan.github.io");//修改成自己的仓库目录即可
        checkGitFiles(gitRepositoryDir, gitRepositoryDir.getAbsolutePath());
    }

    public static void checkGitFiles(File fileDir, String baseFileString) throws FileNotFoundException {// 操作文件
        if (!fileDir.exists()) {
            throw new FileNotFoundException("仓库路径不存在");
        }
        File[] files = fileDir.listFiles();
        if (files != null) {// 判断是否还有子目录
            for (int i = 0; i < files.length; i++) {
                if (files[i].isFile() && files[i].length() >= 100 * 1024 * 1024) {// 判断是文件，且大小大于100M（github大文件上传限制为100M）
                    File file = files[i];
                    List<String> list = new ArrayList<>();//获取文件的相对路径
                    while (!file.getAbsolutePath().equals(baseFileString)) {
                        list.add(file.getName());
                        file = file.getParentFile();
                    }
                    StringBuilder sb = new StringBuilder();
                    for (int j = list.size() - 1; j >= 0; j--) {
                        sb.append("/" + list.get(j));
                    }
                    System.out.println(sb);//打印相对路径
                    String path = baseFileString + "\\.gitattributes"; //.gitattributes文件路径
                    String context = sb.toString() + " filter=lfs diff=lfs merge=lfs -text";//构建写入.gitattributes文件的字符串
                    appendContext(path, context);//慎用，还是根据打印出的字符串手动添加！！！！！
                } else {
                    if (!files[i].getName().equals(".git"))//忽略仓库目录
                        checkGitFiles(files[i], baseFileString);// 递归调用，直到所有的文件都没有了子目录
                }
            }
        }
    }

    //向文件追加内容方法
    public static void appendContext(String path, String appendContext) {
        FileWriter fw = null;
        try {
            //如果文件存在，则追加内容；如果文件不存在，则创建文件
            File f = new File(path);
            fw = new FileWriter(f, true);
        } catch (IOException e) {
            e.printStackTrace();
        }
        PrintWriter pw = new PrintWriter(fw);
        pw.println(appendContext);
        pw.flush();
        try {
            fw.flush();
            pw.close();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
